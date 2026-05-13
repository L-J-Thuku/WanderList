import { useParams } from 'react-router-dom';
import DestinationForm from '../components/destination-form';

export default function EditDestination({ destinations, onEdit }) {
  const { id }   = useParams();
  const existing = destinations.find((d) => d.id === parseInt(id));
  return <DestinationForm onSubmit={onEdit} existingData={existing} />;
}
