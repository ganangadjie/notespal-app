import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {db, storage} from "../configs/firebase"
import {
  getDocs,
  getDoc,
  query,
  doc,
  collection,
  orderBy,
  serverTimestamp,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const getNotesAsync = async () => {
  try {
    const snapshots = await getDocs(
      collection(db, "notes"),
      orderBy("createdAt", "asc")
    );
    const notes = snapshots.docs.map((snapshot) => getSnapshotData(snapshot));

    return notes;
  } catch (error) {
    console.log(error);
  }
};

export const getNoteAsync = async (id) => {
  try {
    const noteDoc = doc(db, "notes", id);
    const snapshot = await getDoc(noteDoc);
    return getSnapshotData(snapshot);
  } catch (error) {
    console.log(error);
  }
};

export const createNoteAsync = async (note, image) => {
  try {
    if (image) {
      const url = await uploadImage(image, "/images/");
      if (url.length > 0) {
        note.image = url;
      }
    }
    const newNote = {
      ...note,
      createdAt: serverTimestamp(),
    };

    const noteDoc = doc(db, "notes", newNote.id);
    await setDoc(noteDoc, newNote);
    const snapshot = await getDoc(noteDoc);
    return getSnapshotData(snapshot);
  } catch (error) {
    console.log(error);
  }
};

export const updateNoteAsync = async (toUpdate, image) => {
  try {
    if (image) {
      const url = await uploadImage(image, "/images/");
      if (url.length > 0) {
        toUpdate.image = url;
      }
    }

    const updated = {
      title: toUpdate.title,
      desc: toUpdate.desc,
      image: toUpdate?.image ? toUpdate.image : "",
    };

    const noteDoc = doc(db, "notes", toUpdate.id);
    await updateDoc(noteDoc, updated);
    const snapshot = await getDoc(noteDoc);
    return getSnapshotData(snapshot);
  } catch (error) {
    console.log(error);
  }
};

export const deleNoteAsync = async (id) => {
  try {
    const noteDoc = doc(db, "notes", id);
    const res = await deleteDoc(noteDoc);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getSnapshotData = (snapshot) => {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();
  return {
    ...data,
    createdAt: data.createdAt?.toDate().toDateString(),
  };
};

const uploadImage = async (image, location) => {
  const storageRef = ref(storage, `${location}${image.filename}`);
  const uploadTask = await uploadBytes(storageRef, image.file);
  const url = await getDownloadURL(uploadTask.ref);
  return url;
};
