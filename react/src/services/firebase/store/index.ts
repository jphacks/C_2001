/**
 *
 * Firestoreのロジックの実態を記述
 *
 */
import FireApp from "../config";
import firebase from "firebase";

export interface DocData {
  data:
    | {
        [field: string]: any;
      }
    | null
    | undefined;
  id: string | null;
}

export interface SetFql {
  [Field: string]: any;
}

const db = FireApp.firestore();

const pathSplitStrig = "/";

function pathSplit(DBPathQuery: string): Array<string> {
  return DBPathQuery.split(pathSplitStrig);
}

const getBaseCollection = (path: string) => {
  const [_coll] = pathSplit(path);
  return db.collection(_coll);
};

const getBaseDoc = (path: string) => {
  const [_coll, _doc] = pathSplit(path);
  return db.collection(_coll).doc(_doc);
};

const getBaseSubCollection = (path: string) => {
  const [, , _subColl] = pathSplit(path);
  return getBaseDoc(path).collection(_subColl);
};

const getBaseSubDoc = (path: string) => {
  const [, , _subColl, _subDoc] = pathSplit(path);
  return getBaseDoc(path).collection(_subColl).doc(_subDoc);
};

export const getCollection = async (
  path: string
): Promise<Array<DocData> | null> => {
  try {
    const snapShot = await getBaseCollection(path).get();
    return snapShot.empty
      ? null
      : snapShot.docs.map((doc: firebase.firestore.DocumentData) => ({
          id: doc.id,
          data: doc.data(),
        }));
  } catch (error) {
    throw error;
  }
};

export const setCollection = async (
  path: string,
  query: SetFql,
  option: any
): Promise<string> => {
  try {
    const ref = await getBaseCollection(path).add(query);
    return ref.id;
  } catch (error) {
    throw error;
  }
};

export const getSubCollection = async (
  path: string
): Promise<Array<DocData> | null> => {
  try {
    const snapShot = await getBaseSubCollection(path).get();
    return snapShot.empty
      ? null
      : snapShot.docs.map((doc: firebase.firestore.DocumentData) => ({
          id: doc.id,
          data: doc.data(),
        }));
  } catch (error) {
    throw error;
  }
};

export const setSubCollection = async (
  path: string,
  query: SetFql,
  option: any
): Promise<string> => {
  try {
    const ref = await getBaseSubCollection(path).add(query);
    return ref.id;
  } catch (error) {
    throw error;
  }
};

export const setDoc = async (
  path: string,
  query: SetFql,
  option?: any
): Promise<void> => {
  try {
    return getBaseDoc(path).set(query);
  } catch (error) {
    throw error;
  }
};

export const updateDoc = async (
  path: string,
  query: SetFql,
  option?: any
): Promise<void> => {
  try {
    return getBaseDoc(path).update(query);
  } catch (error) {
    throw error;
  }
};

export const getDoc = async (
  path: string,
  option?: any
): Promise<DocData | null> => {
  try {
    const snapshot = await getBaseDoc(path).get();
    return snapshot.exists
      ? {
          id: snapshot.id,
          data: snapshot.data(),
        }
      : null;
  } catch (error) {
    throw error;
  }
};

export const setSubDoc = async (
  path: string,
  query: SetFql,
  option?: any
): Promise<void> => {
  try {
    return getBaseSubDoc(path).set(query);
  } catch (error) {
    throw error;
  }
};

export const updateSubDoc = async (
  path: string,
  query: SetFql,
  option?: any
): Promise<void> => {
  try {
    return getBaseSubDoc(path).update(query);
  } catch (error) {
    throw error;
  }
};

export const getSubDoc = async (
  path: string,
  option?: any
): Promise<DocData | null> => {
  try {
    const snapshot = await getBaseSubDoc(path).get();
    return snapshot.exists
      ? {
          id: snapshot.id,
          data: snapshot.data(),
        }
      : null;
  } catch (error) {
    throw error;
  }
};

export const deleteDoc = async (path: string): Promise<void> => {
  try {
    return getBaseDoc(path).delete();
  } catch (error) {
    throw error;
  }
};

export const deleteSubDoc = async (path: string): Promise<void> => {
  try {
    return getBaseSubDoc(path).delete();
  } catch (error) {
    throw error;
  }
};

export const subscribeDoc = async (
  path: string,
  setState: (state: any) => void,
  option?: any
): Promise<() => void> => {
  return new Promise((resolve, reject) => {
    try {
      const unsubscribe = getBaseDoc(path).onSnapshot((doc) => {
        const data: DocData = {
          id: doc.id,
          data: doc.data(),
        };
        setState(data);
      });
      resolve((): void => {
        unsubscribe();
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const subscribeCollection = async (
  path: string,
  setState: (state: any) => void,
  option?: any
): Promise<() => void> => {
  return new Promise((resolve, reject) => {
    try {
      const unsubscribe = getBaseCollection(path).onSnapshot((snapshot) => {
        const data: Array<DocData> = snapshot.docs.map(
          (doc: firebase.firestore.DocumentData) => ({
            id: doc.id,
            data: doc.data(),
          })
        );

        setState(data);
      });
      resolve((): void => {
        unsubscribe();
      });
    } catch (error) {
      reject(error);
    }
  });
};
