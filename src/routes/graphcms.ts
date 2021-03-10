import fetch from 'isomorphic-unfetch';

export async function post(req, res, next) {
  const { body } = req;
  const gcmsRes = await fetch(
    'https://api-eu-central-1.graphcms.com/v2/ckm15z50e8ltt01xx2ms2faix/master',
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MTUyNDMwMDAsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrbTE1ejUwZThsdHQwMXh4Mm1zMmZhaXgvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZTgxNDY5OWMtZWYxYS00Mjg0LTkyMDEtNzhhNTJhMDk0YzA5IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.jgcjVNLXp7gTqQXGsTO6SF_si9AIHWzGZrE7hhznwgfZggd1ky7Xux729ZtYe3bwsGM-N-zF9WXIMm5wjPdclibPGJ4qG0LQ_3HhDCtFh9cscl0sf9Ob0bqECJSyIM5m6fjENkGGnXNxDyHOKkdHxQ6SyV1XkQDidCGBxcZn2adgCVUmh-Q_Ft7sKJBK6aLKO5hWvl3dTIZeZzp6h7J6A-sjfvYpzW9tR6lYcoTdbai7Z3qlkkJvE9LqO5soenN2EW-zR8Vy_DkbNJzTyaopDbInTYelsJgjvynzXDDRhHaYLH-0kR9yXar87BCA500HGZQzT0-oCV-xk6rzy64DwjKEf50xBj9eFmYasg2JysGiHfFqf3ihyPxUsOs2in1IXh6gSfVa3XrZlag3roHn46LsqfquSOECROfulARVRedRMax8t2qzHNHLUQlSRa31hpwo1G2BPypAf_uVG_VsvAl46mtjOv6ZuTQtZoihPIqEublu7Z36_h36agFztDRLZIN4hCIR93XxtiAleb5uDli8PuDfIoClFuZxT8dCyL2NalZUjtEalxEd4SwvzTzCs1x9m9xn1DpFN19L08iF_Z6_ivp7TKCSYzu2rwW0iinpDxdm_hEhbO6MBRrKRMdkp-oyyi-_7c8H2n52d8Cm5-9eLZ8Dm10eWQ1UkfiGw6A',
      },
      method: 'POST',
      body: JSON.stringify(body),
    }
  );

  if (gcmsRes.ok) {
    const { data } = await gcmsRes.json();
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify({ data }));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
