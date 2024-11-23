import { openDB, DBSchema, IDBPDatabase } from 'idb'

interface EcoHubDB extends DBSchema {
  projects: {
    key: string
    value: {
      id: string
      title: string
      description: string
      category: string
      status: string
      lastModified: number
    }
  }
  updates: {
    key: string
    value: {
      id: string
      content: string
      author: string
      timestamp: number
      type: string
      pending: boolean
    }
  }
  metrics: {
    key: string
    value: {
      id: string
      category: string
      value: number
      timestamp: number
    }
  }
}

let db: IDBPDatabase<EcoHubDB>

export async function initDB() {
  db = await openDB<EcoHubDB>('ecohub-db', 1, {
    upgrade(db) {
      // Projects store
      if (!db.objectStoreNames.contains('projects')) {
        db.createObjectStore('projects', { keyPath: 'id' })
      }
      
      // Updates store
      if (!db.objectStoreNames.contains('updates')) {
        db.createObjectStore('updates', { keyPath: 'id' })
      }
      
      // Metrics store
      if (!db.objectStoreNames.contains('metrics')) {
        db.createObjectStore('metrics', { keyPath: 'id' })
      }
    },
  })
}

export async function saveOffline(storeName: keyof EcoHubDB, data: any) {
  if (!db) await initDB()
  await db.put(storeName, {
    ...data,
    lastModified: Date.now(),
  })
}

export async function getOfflineData(storeName: keyof EcoHubDB) {
  if (!db) await initDB()
  return db.getAll(storeName)
}

export async function syncOfflineData() {
  // Implement sync logic with backend
  // This should run when online connection is restored
}