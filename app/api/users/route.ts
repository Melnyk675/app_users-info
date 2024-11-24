import { NextResponse } from 'next/server';

const users = [
  { id: 1, name: 'Vlad Smith', email: 'vlad@example.com' },
  { id: 2, name: 'Katya Dolores', email: 'jane@example.com' },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const { name, email } = await req.json();
  
  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are missing' }, { status: 400 });
  }

  const newUser = { id: Date.now(), name, email };
  users.push(newUser);

  return NextResponse.json(newUser, { status: 201 });
}