import { DefaultLayout } from '../layouts';

import Sidebar from 'modules/sidebar/SidebarCntnr';
import Gallery from 'modules/gallery/GalleryCntnr';
export default function Home() {
	return (
		<DefaultLayout>
			<Gallery />
		</DefaultLayout>
	);
}
