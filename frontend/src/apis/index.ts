const BASE_URL = "http://localhost:8090/api";

export const apiFetch = async (endpoint, options = {}) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error('Network response failed');
    }

    return response.json();
};

// const fetchGetData = async () => {
//     try {
//         const data = await apiFetch('');
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// fetchGetData();

// const fetchPostData = async () => {
//     try {
//         const data = await apiFetch('', {
//             method: 'POST',
//             body: JSON.stringify({ key: 'value' }),
//         });
//         console.log(data);
//     } catch (error) {
//         console.error('Error posting data:', error);
//     }
// };

// fetchPostData();

// const fetchPutData = async () => {
//     try {
//         const data = await apiFetch('', {
//             method: 'PUT',
//             body: JSON.stringify({ key: 'newValue' }),
//         });
//         console.log(data);
//     } catch (error) {
//         console.error('Error updating data:', error);
//     }
// };

// fetchPutData();

// const fetchDeleteData = async () => {
//     try {
//         const data = await apiFetch('', {
//             method: 'DELETE',
//         });
//         console.log(data);
//     } catch (error) {
//         console.error('Error deleting data:', error);
//     }
// };

// fetchDeleteData();
