export function getFormData(form: HTMLFormElement): Record<string, FormDataEntryValue>{
  const formData = new FormData(form)
  const payload: Record<string, FormDataEntryValue> = {}
  for (const pair of formData.entries()) {
    payload[pair[0]] = pair[1]
  }
  return payload
}
