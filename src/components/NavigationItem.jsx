const colorStyle = {
  light: {
    active: "text-neutral-900",
    inactive: "text-neutral-300",
  },
  dark: {
    active: "text-neutral-100",
    inactive: "text-neutral-800",
  },
};

const spaceStyle = {
  sm: "space-x-0.5",
  md: "space-x-0.5",
  lg: "space-x-1",
};

const numberStyle = {
  sm: "w-3 text-[8px]",
  md: "w-4 text-[10px]",
  lg: "w-5 text-[12px]",
};

const nameStyle = {
  sm: "text-[20px]",
  md: "text-[24px]",
  lg: "text-[30px]",
};

function NavigationItem({ mode, state, size, number, name }) {
  return (
    <div
      className={`font-display flex flex-row ${spaceStyle[size]} ${colorStyle[mode][state]}`}
    >
      <div className={`leading-none ${numberStyle[size]}`}>{`0${number}`}</div>
      <div className={`font-black uppercase leading-none ${nameStyle[size]}`}>
        {name}
      </div>
    </div>
  );
}

NavigationItem.defaultProps = {
  mode: "light",
  state: "inactive",
  size: "sm",
  number: "1",
  name: "intro",
};

export default NavigationItem;
