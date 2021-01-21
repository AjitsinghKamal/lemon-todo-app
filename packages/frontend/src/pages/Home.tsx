import { DefaultLayout } from '../layouts';

import Sidebar from 'modules/sidebar/SidebarCntnr';
import Gallery from 'modules/board/OverviewCntnr';
export default function Home() {
	return (
		<DefaultLayout>
			<Gallery />
		</DefaultLayout>
	);
}
