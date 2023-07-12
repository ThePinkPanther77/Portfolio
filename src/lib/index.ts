import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { Data } from '$lib/data';

dayjs.extend(relativeTime);

const email = new URLSearchParams();
email.append('email', 'h.sarhan@innopolis.university');

export async function Img(): Promise<Data> {
	const resId = await fetch('https://fwd.innopolis.app/api/hw2?' + email.toString());
	const id = await resId.json();
	const res = await fetch('https://fwd.innopolis.university/api/comic?id=' + id);
	const data = await res.json();

	return data;
}
