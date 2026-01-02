import { openDB } from 'idb';

const DB_NAME = 'FrameCraftDB';
const DB_VERSION = 1;
const STORE_PROJECTS = 'projects';

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_PROJECTS)) {
        const store = db.createObjectStore(STORE_PROJECTS, {
          keyPath: 'id',
          autoIncrement: true,
        });
        store.createIndex('date', 'date');
      }
    },
  });
};

export const saveProjectToDB = async (projectData) => {
  const db = await initDB();
  const tx = db.transaction(STORE_PROJECTS, 'readwrite');
  const store = tx.objectStore(STORE_PROJECTS);
  
  // projectData should have: name, preview (blob/dataUrl), canvasState (json), date
  const id = await store.put({
    ...projectData,
    date: new Date().toISOString()
  });
  
  await tx.done;
  return id;
};

export const getAllProjects = async () => {
    const db = await initDB();
    return db.getAllFromIndex(STORE_PROJECTS, 'date');
};

export const getProjectById = async (id) => {
    const db = await initDB();
    return db.get(STORE_PROJECTS, Number(id));
};

export const deleteProject = async (id) => {
    const db = await initDB();
    return db.delete(STORE_PROJECTS, Number(id));
};
