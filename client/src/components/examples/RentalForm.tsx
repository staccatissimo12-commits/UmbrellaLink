import RentalForm from '../RentalForm';

export default function RentalFormExample() {
  return <RentalForm onSubmit={(data) => console.log('Rental submitted:', data)} />;
}
