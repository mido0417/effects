import redirects from '@/301.json'
export default ({ route , redirect}) => {
    const path = redirects.find(r => r.from === route.path);
    
    if (path) {
      // console.log(`redirect: ${path.from} => ${path.to}`);
      redirect('301',path.to);
    }
}