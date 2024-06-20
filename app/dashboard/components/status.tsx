import {Chip, ChipProps} from '@nextui-org/react';
import { Status } from '@prisma/client';

const statusColorMap: Record<string, ChipProps["color"]>  = {
  Completed: "success",
  Pending: "warning",
  InProgress: "warning",
};

interface statusProps {
    status: Status
}

const statusMap: Record<Status, {label: string, color: 'danger' | 'warning' | 'success'}> = {
    Pending: {label: 'Ouvert', color: 'danger'},    
    InProgress: {label: 'En cours', color: 'warning'},    
    Completed: {label: 'Cloturé', color: 'success'},    
}

const StatusView = ({status}: statusProps) => {
  return (
    <Chip className="capitalize" color={statusMap[status].color} size="sm" variant="flat">
        {statusMap[status].label}
    </Chip>
  )
}

export default StatusView