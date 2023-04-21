import { Mounths } from '../consts';
export const getHumanizeDate = (dateString: string) => {
  const year = dateString.slice(0,4);
  const mounthNumber = dateString.slice(6,7);
  const mounth = Mounths[Number(mounthNumber)];
  return `${mounth} ${year}`;
};
