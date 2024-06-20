import {Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  Tooltip,
  SortDescriptor,
  Spinner,
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure
} from "@nextui-org/react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


import {HiOutlineTrash} from 'react-icons/hi2';
import {BsEye} from 'react-icons/bs';
import StatusView from "../../components/status";
import {  getAllProject } from "@/services/projectServices";
import { useCallback, useEffect, useMemo, useState } from "react";
import { capitalize } from "@/lib/utils";
import {BiSearchAlt} from "react-icons/bi";
import {BsChevronDown} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import Addproject from "./projectModal";
import AddProject from "./projectModal";
import { useRouter } from "next/navigation";
import { Project } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";

interface ProjectProps {
    projects: Project[]
}

const statusOptions = [
  {name: "inProgress", uid: "inProgress"},
  {name: "Pending", uid: "Pending"},
  {name: "Completed", uid: "Completed"},
];

const ProjectList = () => {

  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [projects, setProjects] = useState<Project[]>();
  const [loading, setLoading] = useState(true);
  const [isDeleting, setDeleting] = useState(false);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "title",
    direction: "ascending",
  });

  const router = useRouter();

  const refreshList = useCallback(async () => {
    const data = await getAllProject();
    setProjects(data);
    setLoading(false)
  }, []);

  useEffect(() => {
    refreshList();
  }, [refreshList]);

  const handleProjectAdded = () => {
    refreshList(); 
  };

  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
  let filteredProjects = Array.isArray(projects) ? [...projects] : [];

  if (hasSearchFilter) {
    filteredProjects = filteredProjects.filter((projet) =>
      projet.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
  if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
    filteredProjects = filteredProjects.filter((project) =>
      Array.from(statusFilter).includes(project.status)
    );
  }

  return filteredProjects;
}, [projects, filterValue, statusFilter, hasSearchFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: Project, b: Project) => {
      const first = a[sortDescriptor.column as keyof Project] as unknown as number;
      const second = b[sortDescriptor.column as keyof Project] as unknown as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);


  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[]);

  const onDeleteProject = async (project: Project) => {
        setDeleting(true);
      try {
        await axios.delete("/api/projects/"+project.id);
        handleProjectAdded();
        setDeleting(false);
      } catch (error) {
        setDeleting(false);
      }
    };


  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Rechercher par nom..."
            startContent={<BiSearchAlt />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<BsChevronDown className="text-small" />} variant="flat">
                  Statut
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
        
            <AddProject onSuccess={handleProjectAdded} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {projects?.length} Projets</span>
          <label className="flex items-center text-default-400 text-small">
            Lignes par page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    onSearchChange,
    onRowsPerPageChange,
    onClear,
    projects?.length,
    handleProjectAdded
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "Tous les éléments sélectionnés"
            : `${selectedKeys.size} à ${filteredItems.length} selectionnés`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Précedent
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Suivant
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, page, pages, onNextPage, onPreviousPage, filteredItems.length]);

  return (
    <div>
      <Table 
          isStriped 
          aria-label="Example table with custom cells, pagination and sorting"
          isHeaderSticky
          bottomContent={bottomContent}
          bottomContentPlacement="outside"
          classNames={{
              wrapper: "max-h-[382px]",
          }}
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          sortDescriptor={sortDescriptor}
          topContent={topContent}
          topContentPlacement="outside"
          onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}
          color="primary"
      >
        <TableHeader>
          <TableColumn key="title" allowsSorting={true}>TITRE</TableColumn>
          <TableColumn>DATE DEBUT</TableColumn>
          <TableColumn>DATE FIN</TableColumn>
          <TableColumn>STATUT</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody emptyContent={loading === false && projects?.length == 0 ? "Aucune données disponible !!!" : <Spinner label="Chargement..." />}>
          {sortedItems?.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{new Date(item.startDate).toLocaleDateString()}</TableCell>
              <TableCell>{item.endDate? new Date(item.endDate).toLocaleDateString() : "N/A"}</TableCell>
              <TableCell>
                <StatusView status={item.status} />
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Plus d'informations">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <BsEye />
                    </span>
                  </Tooltip>
                  <AddProject onSuccess={handleProjectAdded} project={item} />
                  <Tooltip color="danger" content="Supprimer le projet">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                      <AlertDialog>
                        <AlertDialogTrigger>
                            <HiOutlineTrash />
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Cette action ne peut être annulée. Elle supprimera définitivement le projet et ses données de nos serveurs.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction onClick={()=>onDeleteProject(item)} className="bg-red-500">Oui, supprimer</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </span>
                  </Tooltip>
            </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  )
}

export default ProjectList