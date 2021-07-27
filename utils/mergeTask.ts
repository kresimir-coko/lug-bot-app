import API_ENDPOINT from '../constants/apiEndpoint';

export default async function mergeTask(taskId) {
	await fetch(`${API_ENDPOINT}/tasks/${taskId}/accept`, {
		cache: 'no-cache',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		mode: 'no-cors',
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	});
}
