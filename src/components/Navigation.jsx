import NavigationItem from "./NavigationItem";
function Navigation() {
  return (
    <div className="flex flex-col space-y-10">
      <NavigationItem number="1" name="intro" mode="dark" />
      <NavigationItem number="2" name="summary" mode="dark" state="active" />
      <NavigationItem number="3" name="works" mode="dark" />
      <NavigationItem number="4" name="project" mode="dark" />
    </div>
  );
}
export default Navigation;
