import AdvertiserSection from '../AdvertiserSection';

export default function AdvertiserSectionExample() {
  return <AdvertiserSection onSubmit={(data) => console.log('Advertiser submitted:', data)} />;
}
