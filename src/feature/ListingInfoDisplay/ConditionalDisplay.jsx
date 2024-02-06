import { useEffect } from 'react';
import Details  from '../../entities/ListingInfoDisplay/Details/Details';
import Error from '../../entities/ListingInfoDisplay/Details/Error';
import Loading from '../../entities/ListingInfoDisplay/Details/Loading';
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
  if (data) {
    return (
      <Details data={data}/>
    )
  }
  if (error) {
    return (
      <Error error={error}/>
    )
  }
  if (loading) {
    return (
      <Loading />
    )
  }

}

export default ConditionalDisplay;