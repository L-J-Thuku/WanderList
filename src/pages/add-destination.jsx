import DestinationForm from '../components/destination-form';

export default function AddDestination({ onAdd }) {
  return <DestinationForm onSubmit={onAdd} />;
}
