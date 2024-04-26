import { SignupFormSchema, FormState } from '@/app/_lib/definitions';

// Explicitly type the `formData` parameter
export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name') as string, // Specify the expected type
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
  // e.g., await createUser(validatedFields.data);
  
  return {
    success: true, // Example response to indicate success
  };
}
