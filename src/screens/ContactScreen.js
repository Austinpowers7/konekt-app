import { FlatList } from 'react-native';
import chats from '../../assets/data/chats.json';
import Contactlistitem from '../components/Contactlistitem';

const ContactScreen = () => {
  return (
  <FlatList 
  data={chats} 
  renderItem={({ item }) => <Contactlistitem chat={item} />} 
  style={{ backgroundColor: 'white '}}
  />
  ); 
};
    



export default ContactScreen;