import { FlatList } from 'react-native';
import chats from '../../assets/data/chats.json';
import ContactListScreenItem from '../components/ContactListScreenItem';


const ContactListScreen = () => {
  return (
    <FlatList 
  data={chats} 
  renderItem={({ item }) => <ContactListScreenItem user={item.user} />} 
  style={{ backgroundColor: 'white '}}
  />
  );
};

export default ContactListScreen