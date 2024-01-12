import {
  getAll,
  addNew,
  getIds,
  getDataById,
} from '../api/controller.mjs';
import { model } from '../user/user.model.js';


//WICHTIG: Lesen sie das readme.md file

jest.mock('../api/model.mjs');


// Gemockte Response, welche der Controller übergeben wird
const response = {
  status: jest.fn((x) => x),
  json: jest.fn((x) => x),
};

describe('Getting all Data', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Loading data successfully', async () => {
    // given - Vorbereiten von erfolgreichem Laden von Angeboten
    //         Mocking von Model
    const storedData = {
      "Hello": "World"
    };
    model.find.mockImplementation(() => {
      return {
        exec: jest.fn().mockResolvedValue(storedData),
      };
    });

    // when - Angebote laden
    await getAll(null, response);

    // then - überprüfen, ob korrekte Angebote
    // geladen wurden
    expect(response.json).toHaveBeenCalledWith(storedData);
  });


  test('Loading data unsuccessfully', async () => {
    // given - Vorbereiten von fehlgeschlagenen Laden von Angeboten
    //         Mocking von Model
    model.find.mockImplementation(() => {
      return {
        exec: jest.fn().mockRejectedValue('Error in getting items'),
      };
    });

    // when - Angebote laden
    await getAll(null, response);

    // then - überprüfen, ob richtiger Fehler aufgetreten ist
    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.json).toHaveBeenCalledWith('Error in getting items');
  });

});

describe('Creating New item (addNew)', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  // Gemockter Request, welcher Controller übergeben wird
  const request = {
    body: {
      "name": "All around India, 10 Simple Questions",
      "questions": [
        {
          "id": "1",
          "question": "What is the capital of India?",
          "isText": "true",
          "options": []
        },
        {
          "id": "2",
          "question": "What is the capital of Afrika?",
          "isText": "false",
          "options": [
            "Delig",
            "Anfangis",
            "Ende"
          ]
        }
      ]
    },
  };


test('Creating new Umfrage sucessfully', async () => {
  // given - Vorbereiten von erfolgreichem Speichern von Angeboten
  //         Mocking von Model
  const dataObj = {

    name: data.name,
    questions: data.questions
  }
  model.create.mockResolvedValue(dataObj);

  // when - Angebote laden
  await addNew(request, response);

  // then - überprüfen, ob korrekte Angebote geladen wurden
  expect(response.json).toHaveBeenCalledWith(dataObj);
});

test('Creating offerings unsuccessfully', async () => {
  // given - Vorbereiten von fehlgeschlagenen Speichern von Angeboten
  //         Mocking von Model
  Offering.create.mockRejectedValue({ message: 'DB error' });

  // when - Angebote laden
  await createOffering(request, response);

  // then - überprüfen, ob richtiger Fehler aufgetreten ist
  expect(response.status).toHaveBeenCalledWith(500);
  expect(response.json).toHaveBeenCalledWith({ message: 'DB error' });
});
});

describe('Deleting Umfrage', () => {
 afterEach(() => {
   jest.resetAllMocks();
 });
 
 // Gemockter Request, welcher Controller übergeben wird
 const request = {
   params: {
     id: '1',
   },
 };
 
 test('Deleting Umfrage successfully', async () => {
   // given - Vorbereiten von erfolgreichem Speichern von Angeboten
   //         Mocking von Model
   const id = req.params.id;

   model.findById.mockImplementation((id) => {
     return {
       exec: jest.fn().mockResolvedValue({
         deleteOne: jest.fn().mockResolvedValue({
           id: id,
         }),
       }),
     };
   });
 
   // when - Angebote laden
   await deletDataById(request, response);
 
   // then - überprüfen, ob korrekte Angebote geladen wurden
   expect(response.json).toHaveBeenCalledWith(request);
 });
 
 test('Deleting Umfrage fails because id is missing', async () => {
   // given - Vorbereiten von fehlgeschlagenen Speichern von Angeboten
   //         Mocking von Model
   Offering.findById.mockImplementation((id) => {
     return {
       exec: jest.fn().mockResolvedValue(null),
     };
   });
 
   // when - Angebote laden
   await deleteDataById(request, response);
 
   // then - überprüfen, ob richtiger Fehler aufgetreten ist
   expect(response.status).toHaveBeenCalledWith(500);
   
 });
 
 
});

describe('Getting all ids', () => {

  afterEach(() => {
    jest.resetAllMocks();
  });
  
  test('Loading ids successfully', async () => {
    // given - Vorbereiten von erfolgreichem Laden von Angeboten
    //         Mocking von Model
    const storedData = [
      "1",
      "2PPUnVD",
      "pF1GmGr",
      "gIqVt8G",
      "i-kILRd",
      "AEbyxkQ",
      "DBupsyd",
      "5766fKE",
      "ur9W2_0",
      "B5DuDGg",
      "iyUB_UI",
      "ju5nCWH"
      ];

    model.find.mockImplementation(() => {
      return {
        exec: jest.fn().mockResolvedValue(storedData),
      };
    });
  
    // when - Angebote laden
    await getIds(null, response);
  
    // then - überprüfen, ob korrekte Angebote
    // geladen wurden
    expect(response.json).toHaveBeenCalledWith(storedData);
  });


  test('Loading ids unsuccessfully', async () => {
    // given - Vorbereiten von fehlgeschlagenen Laden von Angeboten
    //         Mocking von Model
    model.find.mockImplementation(() => {
      return {
        exec: jest.fn().mockRejectedValue('Error in getting items'),
      };
    });
  
    // when - Angebote laden
    await getIds(null, response);
  
    // then - überprüfen, ob richtiger Fehler aufgetreten ist
    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.json).toHaveBeenCalledWith('Error in getting items');
  });


  

});


describe('Getting data by id', () => {

  afterEach(() => {
    jest.resetAllMocks();
  });

  const request = {
    params: {
      id: '1',
    },
  };

  test('Loading data successfully', async () => {
    // given - Vorbereiten von erfolgreichem Laden von Angeboten
    //         Mocking von Model
    const storedData = {
      "id": "1",
      "name": "All around India, 10 Simple Questions",
      "questions": [
        {
          "id": "1",
          "question": "What is the capital of India?",
          "isText": "true",
          "options": []
        },
        {
          "id": "2",
          "question": "What is the capital of Afrika?",
          "isText": "false",
          "options": [
            "Delig",
            "Anfangis",
            "Ende"
          ]
        }
      ]
    };
    model.findById.mockImplementation(() => {
      return {
        exec: jest.fn().mockResolvedValue(storedData),
      };
    });
  
    // when - Angebote laden
    await getDataById(request, response);
  
    // then - überprüfen, ob korrekte Angebote
    // geladen wurden
    expect(response.json).toHaveBeenCalledWith(storedData);
  });


});
