# StackrsBlog
A simple blogging webapp build using NextJs and Supabase for fullstackrs/challenge. <br/>
Deployed at [fullstackrs-challenge.vercel.app](https://fullstackrs-challenge.vercel.app/)
## How to run locally
- Clone the repo.
- Go to supabase and create a new project.
- Create profiles table
  ```
  create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  created_at timestamp default now(),
  full_name text
  );
  
  create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

  create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);
  
  create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

  -- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
  -- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
  
  create function public.handle_new_user()
  returns trigger as $$
  begin
    insert into public.profiles (id, full_name)
    values (new.id, new.raw_user_meta_data->>'full_name');
    return new;
  end;
  
  $$ language plpgsql security definer;
  create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
  ```
- Similarly create blogs table in supabase (refer to schema for more info).
- Create `.env.local` in the root directory of the project (where `next.config.js` is).
  ```
  NEXT_PUBLIC_SUPABASE_URL=<Supabase Project Url>
  NEXT_PUBLIC_SUPABASE_ANON_KEY=<Supabase Project Anon Key>
  NEXT_PUBLIC_HOSTURL=http://localhost:<port>
  ```
- Finally, run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
  ```
## Schema
![image](https://github.com/snghvineet/fullstackrs-challenge/assets/79019403/65ad72d2-d295-4eba-b977-58b946b8581e)

