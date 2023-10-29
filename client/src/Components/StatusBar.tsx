interface StatusbarProps {
    label: string;
    primaryColor: string;
    fullWidth?: boolean;
}

const Statusbar: React.FC<StatusbarProps> = ({
    label,
    primaryColor,
    fullWidth,
}) => {
    return ( 
        <div>
            <button
            className={`
            cursor-default
            rounded-full
            font-semibold
            text-white
                ${fullWidth ? 'w-full' : 'w-fit'}
                bg-${primaryColor}
            `}
            onClick={() => {}}
             >
                {label}
             </button>
        </div>
     );
}
 
export default Statusbar;