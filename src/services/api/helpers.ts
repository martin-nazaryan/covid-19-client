/**
 * @todo Fix any
 * */
export const createApiError = (error: any) => ({
  name: '',
  message: error?.response?.data?.message || '',
  code: `${error?.response?.status}` || '400',
});
