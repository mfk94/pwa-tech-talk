import { GitHubLogo, LinkedInLogo } from '@/client/assets/socials';
import { Button, Link, Tooltip } from '@nextui-org/react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

export const Socials = () => (
  <div className="pt-safe-offset-2 pl-safe-offset-4 fixed top-0 left-0 z-50">
    <div className="flex items-center gap-1 sm:flex-col">
      <Tooltip content="Check out Jakub Jóźwiak GitHub profile">
        <Button
          isIconOnly
          variant="light"
          as={Link}
          isExternal
          aria-label="Check out Jakub Jóźwiak GitHub profile"
          href="https://github.com/Jozwiaczek"
        >
          <GitHubLogo className="size-6" />
        </Button>
      </Tooltip>
      <Tooltip content="Check out PWA Tech Talk code repository">
        <Button
          isIconOnly
          variant="light"
          as={Link}
          isExternal
          aria-label="Check out PWA Tech Talk code repository"
          href="https://github.com/Jozwiaczek/pwa-tech-talk"
        >
          <CodeBracketIcon className="size-8" />
        </Button>
      </Tooltip>
      <Tooltip content="Check out Jakub Jóźwiak LinkedIn profile">
        <Button
          isIconOnly
          variant="light"
          as={Link}
          isExternal
          aria-label="Check out Jakub Jóźwiak LinkedIn profile"
          href="https://www.linkedin.com/in/jozwiakjakub/"
        >
          <LinkedInLogo className="size-6" />
        </Button>
      </Tooltip>
    </div>
  </div>
);
