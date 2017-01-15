export interface Document {
  // Since we know this app will contect to a rails API
  // we will use snake case instead of camel case.
  title: string,
  description: string,
  file_url: string,
  updated_at: string,
  image_url: string,
}