import { IconType } from 'react-icons';
import { GiChecklist, GiLaptop, GiMusicalNotes, GiPaintBrush, GiPencil, GiTv } from 'react-icons/gi';

const iconMap = {
	2020: {
		a: { name: 'AMV', icon: GiTv },
		c: { name: 'Creative', icon: GiPaintBrush },
		q: { name: 'Quiz', icon: GiChecklist },
		w: { name: 'WebDev', icon: GiLaptop }
	},
	2021: {
		a: { name: 'AMV', icon: GiTv },
		d: { name: 'Design & Arts', icon: GiPaintBrush },
		m: { name: 'Music', icon: GiMusicalNotes },
		q: { name: 'Quiz', icon: GiChecklist },
		w: { name: 'WebDev', icon: GiLaptop }
	},
	2022: {
		a: { name: 'AMV & Music', icon: GiTv },
		d: { name: 'Design & Arts', icon: GiPaintBrush },
		n: { name: 'Media & Newsletter', icon: GiPencil },
		q: { name: 'Quiz', icon: GiChecklist },
		w: { name: 'WebDev', icon: GiLaptop }
	},
	2023: {
		a: { name: 'AMV & Music', icon: GiTv },
		d: { name: 'Design & Arts', icon: GiPaintBrush },
		n: { name: 'Media & Newsletter', icon: GiPencil },
		q: { name: 'Quiz', icon: GiChecklist },
		w: { name: 'WebDev', icon: GiLaptop }
	}
};

export default iconMap;
