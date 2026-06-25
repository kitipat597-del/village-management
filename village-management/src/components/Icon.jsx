export default function Icon({ name, className = 'h-7 w-7' }) {
  const icons = {
    building: (
      <path d="M3 21h18M5 21V5a1 1 0 011-1h5a1 1 0 011 1v16M15 21v-9a1 1 0 011-1h3a1 1 0 011 1v9M9 7h0M9 11h0M9 15h0" />
    ),
    finance: (
      <path d="M3 3v18h18M7 14l4-4 3 3 5-5M18 8h3v3" />
    ),
    shield: (
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
    ),
    check: <path d="M20 6L9 17l-5-5" />,
    phone: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.11 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.68 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0122 16.92z" />,
    mail: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M22 6l-10 7L2 6" />
      </>
    ),
    pin: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name] || icons.building}
    </svg>
  )
}
