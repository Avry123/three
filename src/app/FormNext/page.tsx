// Updated imports, ensure 'use client' is used if needed
import { useState } from 'react'; // Adjust this if using a different hook for form state
import { signup } from '@/app/actions/auth';
import { SignupButton } from '@/components/signup-form';

export default function Page() {
 
 return (
    <form> 
      {/* Using `onSubmit` to capture form submission */}
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>      
      <SignupButton />
    </form>
  );
}
