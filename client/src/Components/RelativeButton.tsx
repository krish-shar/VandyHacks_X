interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
  }
  
  const RelativeButton: React.FC<ButtonProps> = ({ 
    label, 
    secondary, 
    fullWidth, 
    onClick, 
    large, 
    disabled, 
    outline,
    small
  }) => {
    return ( 
      <button
        disabled={disabled}
        onClick={onClick}
        className={`
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-full
          font-semibold
          hover:opacity-80
          transition
          border-2
          ${fullWidth ? 'w-full' : 'w-fit'}
          ${secondary ? 'bg-white' : 'bg-sky-600'}
          ${secondary ? 'text-black' : 'text-white'}
          ${secondary ? 'border-black' : 'border-sky-600'}
          ${large ? 'text-xl' : small ? 'text-xs':'text-md'}
          ${large ? 'px-5' : small ? 'px-3': 'px-4'}
          ${large ? 'py-3' : small ? 'py-1': 'py-2'}
          ${outline ? 'bg-transparent' : ''}
          ${outline ? 'border-white' : ''}
          ${outline ? 'text-white' : ''}
        `}
      >
        {label}
      </button>
     );
  }
   
  export default RelativeButton;