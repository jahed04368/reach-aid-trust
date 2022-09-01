// Get data through API
export async function getAllProjects() {
  const response = await fetch('https://jsonkeeper.com/b/56JF');
  const { projects } = await response.json();

  const events = [];

  for (const key in projects) {
    events.push({
      id: key,
      ...projects[key],
    });
  }
  return events;
}

// Get data through js file hardcoded

// export async function getAllEvents() {
//   const events = [];
//   for (const key in data) {
//     events.push({
//       id: key,
//       ...data[key],
//     });
//   }
//   return events;
// }

export async function getFeaturedProjects() {
  const allProjects = await getAllProjects();
  return allProjects.filter((event) => event.isFeatured);
}

export async function getProjectById(id) {
  const allProjects = await getAllProjects();
  return allProjects.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allProjects = await getAllProjects();

  let filteredEvents = allProjects.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
