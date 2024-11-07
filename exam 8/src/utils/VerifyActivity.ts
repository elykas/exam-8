import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}
const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
 
  
  const rolesData = roles;
  const index = rolesData.findIndex(r => r === role)
  const level = activities.findIndex(a => a === activity)
  if(index === -1 || index< level ){
    return false
  }
  return true

};
export default useIsVerified;