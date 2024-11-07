import { useState, useEffect } from 'react';
import buildingData from "../data/building.json"

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(() => {
    const fetchBuildingData = async () => {
      setBuildingData(buildingData);
    };
    fetchBuildingData();
  }, []);
  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    return buildingData[floorIndex];
  }
  const getListOfActivities = ():string[]=>{
    return buildingData.map(floor => floor.activity);
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
