import { cn } from '@/lib/utils';

interface IPlanet {
  size?: number;
  className?: string;
}

export default function Planet({ size = 16, className = '' }: IPlanet) {
  return (
    <svg
      className="planet-icon"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_333_27)">
        <path
          d="M14.4562 4.56875C15.6937 2.62813 15.9719 1.3625 15.3062 0.696879C14.6094 0.00312871 13.2625 0.331254 11.1875 1.70313C10.15 1.08438 8.9375 0.725004 7.64375 0.725004C3.825 0.725004 0.728122 3.82188 0.728122 7.64063C0.728122 8.9375 1.08437 10.15 1.70625 11.1844C0.331247 13.2625 0.00312236 14.6094 0.696872 15.3031C0.931247 15.5375 1.2375 15.6563 1.625 15.6563C2.3375 15.6563 3.3125 15.2563 4.56875 14.4563C4.75 14.3406 4.9375 14.2156 5.12812 14.0844C5.90625 14.3875 6.75625 14.5563 7.64062 14.5563C11.4594 14.5563 14.5562 11.4594 14.5562 7.64063C14.5562 6.75313 14.3875 5.90625 14.0844 5.12813C14.2156 4.9375 14.3375 4.75 14.4562 4.56875ZM14.3875 1.61563C14.4312 1.93438 14.1219 2.71563 13.4125 3.83125C13.0906 3.34688 12.7125 2.90313 12.2844 2.51563C13.5281 1.74375 14.1719 1.59688 14.3875 1.61563ZM7.64062 1.99688C9.79375 1.99688 11.6687 3.20938 12.6219 4.98438C11.7687 6.14375 10.5937 7.53438 9.0625 9.0625C7.53437 10.5906 6.14375 11.7656 4.98125 12.6188C3.20625 11.6656 1.99375 9.79063 1.99375 7.64063C1.99687 4.52813 4.52812 1.99688 7.64062 1.99688ZM1.61562 14.3875C1.6 14.1719 1.74375 13.525 2.51562 12.2844C2.90312 12.7125 3.34687 13.0906 3.83125 13.4125C2.71562 14.1188 1.93437 14.4281 1.61562 14.3875ZM13.2875 7.64063C13.2875 10.7531 10.7562 13.2875 7.64062 13.2875C7.2125 13.2875 6.79687 13.2406 6.39687 13.15C7.54687 12.2531 8.76562 11.1656 9.96562 9.96563C11.1625 8.76875 12.25 7.54688 13.15 6.39688C13.2406 6.79688 13.2875 7.21563 13.2875 7.64063Z"
          className={cn('fill-purple', className)}
        />
      </g>
    </svg>
  );
}