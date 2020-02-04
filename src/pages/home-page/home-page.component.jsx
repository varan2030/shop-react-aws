import React, { useEffect } from 'react';
import { API } from "aws-amplify";

function HomePage(props) {
    useEffect(() => {
		async function onLoad() {
			
			try {
				const user = await loadNotes({userId: "eb56rhm0d1lke8dbeorfo04ud", userName: "uxvaran@gmail.com"});
                console.log(user);
			} catch (e) {
				console.log(e);
			}

		}

		onLoad();
	}, [props.isAuthenticated]);

	function loadNotes(user) {
		return API.post("users", "/users", {
			body: user
		});
	}
    return (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor, lectus sit amet imperdiet suscipit, lacus tellus sodales felis, ac pulvinar nibh nibh sed magna. Duis aliquet leo risus, a auctor turpis interdum ut. Donec nec ullamcorper turpis. Nam nec arcu ac elit ullamcorper rhoncus. Cras tristique, est vel porttitor commodo, magna felis dignissim augue, vel aliquet enim est vel magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce dapibus eu mauris id cursus. Pellentesque dictum arcu sed est commodo, ac volutpat nisi lacinia. Integer accumsan accumsan euismod. Donec vitae nulla imperdiet, egestas nulla in, auctor leo. Ut vel ante eu arcu efficitur accumsan at finibus ligula.

Nulla vel pulvinar enim. Pellentesque tempus vulputate pharetra. Pellentesque convallis odio at augue efficitur semper. Fusce nibh justo, viverra vitae enim iaculis, consectetur tempor nunc. Phasellus convallis malesuada diam, eu pretium arcu mattis nec. Pellentesque maximus dignissim placerat. Integer efficitur sapien in hendrerit pellentesque. Praesent et dictum magna. Proin tortor sapien, lacinia et neque pulvinar, cursus facilisis lacus. Praesent dictum eleifend ante, vitae gravida orci ullamcorper sed. Etiam nulla quam, fermentum ac luctus vitae, lobortis sed massa. Aenean lorem ante, facilisis sed pretium id, molestie vestibulum ipsum. Praesent odio quam, molestie ut est eu, posuere cursus nibh.

Duis molestie sit amet ante id egestas. Suspendisse erat sapien, dictum vel laoreet id, tincidunt vel enim. Cras faucibus felis lacus. Integer malesuada metus at tortor volutpat, fermentum sollicitudin tortor porttitor. Pellentesque maximus aliquet enim eget sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut tempor ipsum quis turpis rhoncus, quis ultricies augue ullamcorper. Morbi eu tortor ut leo interdum sodales. Sed lectus libero, placerat eu lacinia at, fringilla quis quam. Duis mi libero, congue tristique nibh non, lobortis hendrerit purus. Proin ac consectetur turpis. Vestibulum efficitur odio non metus facilisis, et vehicula lectus varius.

Vestibulum luctus urna sed consectetur pharetra. Mauris facilisis, metus sit amet varius efficitur, sem nibh consectetur erat, euismod gravida purus metus quis nisl. Aliquam nec dapibus mauris, sed aliquet sem. Nam mauris lacus, suscipit sed ullamcorper et, placerat nec erat. Duis sed iaculis purus. Maecenas egestas eu felis a auctor. Fusce mollis purus eu nibh suscipit dapibus. Vestibulum maximus sodales arcu a vulputate. Morbi nec ornare urna. Nullam semper rhoncus sapien quis aliquam. Fusce ex dui, convallis quis velit non, porttitor molestie mauris. Donec non iaculis ipsum. Phasellus sed elit ac velit consequat lobortis. In varius id purus ut egestas. Fusce semper diam in facilisis feugiat. Fusce blandit augue ac libero malesuada, ut pellentesque nisl molestie.

Suspendisse volutpat egestas finibus. Proin et ultricies ipsum, a auctor nibh. Pellentesque vitae sollicitudin massa. Mauris mattis consequat nibh, vel viverra risus eleifend non. Suspendisse tellus justo, auctor sed blandit sit amet, fermentum a enim. Morbi ornare porttitor lectus ullamcorper egestas. Suspendisse lacinia, mauris at luctus accumsan, ante sem commodo orci, sit amet pulvinar leo elit ac dolor. Nam scelerisque dui sed vestibulum ornare. Sed vulputate augue quis sem laoreet, ultricies volutpat enim mollis. Donec a consectetur elit, a blandit tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ut venenatis tellus, non vestibulum nibh. Ut ultrices neque sit amet libero convallis ultricies.  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor, lectus sit amet imperdiet suscipit, lacus tellus sodales felis, ac pulvinar nibh nibh sed magna. Duis aliquet leo risus, a auctor turpis interdum ut. Donec nec ullamcorper turpis. Nam nec arcu ac elit ullamcorper rhoncus. Cras tristique, est vel porttitor commodo, magna felis dignissim augue, vel aliquet enim est vel magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce dapibus eu mauris id cursus. Pellentesque dictum arcu sed est commodo, ac volutpat nisi lacinia. Integer accumsan accumsan euismod. Donec vitae nulla imperdiet, egestas nulla in, auctor leo. Ut vel ante eu arcu efficitur accumsan at finibus ligula.

Nulla vel pulvinar enim. Pellentesque tempus vulputate pharetra. Pellentesque convallis odio at augue efficitur semper. Fusce nibh justo, viverra vitae enim iaculis, consectetur tempor nunc. Phasellus convallis malesuada diam, eu pretium arcu mattis nec. Pellentesque maximus dignissim placerat. Integer efficitur sapien in hendrerit pellentesque. Praesent et dictum magna. Proin tortor sapien, lacinia et neque pulvinar, cursus facilisis lacus. Praesent dictum eleifend ante, vitae gravida orci ullamcorper sed. Etiam nulla quam, fermentum ac luctus vitae, lobortis sed massa. Aenean lorem ante, facilisis sed pretium id, molestie vestibulum ipsum. Praesent odio quam, molestie ut est eu, posuere cursus nibh.

Duis molestie sit amet ante id egestas. Suspendisse erat sapien, dictum vel laoreet id, tincidunt vel enim. Cras faucibus felis lacus. Integer malesuada metus at tortor volutpat, fermentum sollicitudin tortor porttitor. Pellentesque maximus aliquet enim eget sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut tempor ipsum quis turpis rhoncus, quis ultricies augue ullamcorper. Morbi eu tortor ut leo interdum sodales. Sed lectus libero, placerat eu lacinia at, fringilla quis quam. Duis mi libero, congue tristique nibh non, lobortis hendrerit purus. Proin ac consectetur turpis. Vestibulum efficitur odio non metus facilisis, et vehicula lectus varius.

Vestibulum luctus urna sed consectetur pharetra. Mauris facilisis, metus sit amet varius efficitur, sem nibh consectetur erat, euismod gravida purus metus quis nisl. Aliquam nec dapibus mauris, sed aliquet sem. Nam mauris lacus, suscipit sed ullamcorper et, placerat nec erat. Duis sed iaculis purus. Maecenas egestas eu felis a auctor. Fusce mollis purus eu nibh suscipit dapibus. Vestibulum maximus sodales arcu a vulputate. Morbi nec ornare urna. Nullam semper rhoncus sapien quis aliquam. Fusce ex dui, convallis quis velit non, porttitor molestie mauris. Donec non iaculis ipsum. Phasellus sed elit ac velit consequat lobortis. In varius id purus ut egestas. Fusce semper diam in facilisis feugiat. Fusce blandit augue ac libero malesuada, ut pellentesque nisl molestie.

Suspendisse volutpat egestas finibus. Proin et ultricies ipsum, a auctor nibh. Pellentesque vitae sollicitudin massa. Mauris mattis consequat nibh, vel viverra risus eleifend non. Suspendisse tellus justo, auctor sed blandit sit amet, fermentum a enim. Morbi ornare porttitor lectus ullamcorper egestas. Suspendisse lacinia, mauris at luctus accumsan, ante sem commodo orci, sit amet pulvinar leo elit ac dolor. Nam scelerisque dui sed vestibulum ornare. Sed vulputate augue quis sem laoreet, ultricies volutpat enim mollis. Donec a consectetur elit, a blandit tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ut venenatis tellus, non vestibulum nibh. Ut ultrices neque sit amet libero convallis ultricies.  

        </div>
    )
}

export default HomePage;