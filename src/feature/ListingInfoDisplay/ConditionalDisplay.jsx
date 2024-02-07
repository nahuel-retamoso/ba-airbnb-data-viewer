import { useEffect } from 'react';
import Details  from '../../entities/ListingInfoDisplay/Details/Details';
import NoId from '../../entities/ListingInfoDisplay/Details/NoId';
import useData from './useData';
import { useSelector } from 'react-redux';


function ConditionalDisplay() {

  const id = useSelector(state => state.id.IDselected);

  const {loading, error, data} = useData();

  useEffect(() => {
    if(data){
      console.log(data)}
    }, [data])

  if (id === '') {
    return (
      <NoId />
    )
  }
  if (id) {
    return (
      <Details data={data} loading={loading} error={error}/>
    )
  }

}

export default ConditionalDisplay;