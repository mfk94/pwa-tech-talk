import { useEvents } from '@/client/hooks/useEvents';
import { Badge, Tooltip } from '@nextui-org/react';
import { SignalIcon, SignalSlashIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const ServerInfo = () => {
  const { totalSpectators, isConnected } = useEvents();

  return (
    <aside className="fixed bottom-4 right-4">
      {isConnected && (
        <Badge content={totalSpectators} color="secondary" shape="circle">
          <Tooltip content="Total spectators">
            <UserGroupIcon className="size-9 text-content1 cursor-help" />
          </Tooltip>
        </Badge>
      )}
      {isConnected ? (
        <Tooltip content="Server is online">
          <SignalIcon className="size-9 text-success cursor-help" />
        </Tooltip>
      ) : (
        <Tooltip content="Server is offline">
          <SignalSlashIcon className="size-9 text-warning cursor-help" />
        </Tooltip>
      )}
    </aside>
  );
};
