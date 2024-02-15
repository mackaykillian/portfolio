import NavigationItem from "./NavigationItem";
function Navigation({ size }) {
  return (
    <>
      {size == "lg" ? (
        <div className="flex flex-col space-y-10">
          <NavigationItem number="1" name="intro" mode="dark" />
          <NavigationItem
            number="2"
            name="summary"
            mode="dark"
            state="active"
          />
          <NavigationItem number="3" name="works" mode="dark" />
          <NavigationItem number="4" name="project" mode="dark" />
        </div>
      ) : (
        <div className="flex h-5 flex-col items-end space-y-2 overflow-hidden">
          <NavigationItem number="1" name="intro" mode="dark" />
          <NavigationItem number="2" name="summary" mode="dark" />
          <NavigationItem number="3" name="works" mode="dark" />
          <NavigationItem number="4" name="project" mode="dark" />
        </div>
      )}{" "}
    </>
  );
}

Navigation.defaultProps = {
  size: "sm",
};
export default Navigation;
