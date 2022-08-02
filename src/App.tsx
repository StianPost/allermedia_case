import { useEffect, useState } from 'react';
import Card from './components/Card';
import { Column, Array } from './libs/types';

import axios from 'axios';

function App() {
  const [api, setApi] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://storage.googleapis.com/aller-structure-task/test_data.json'
        );
        setApi(data[0]);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  let i = 0;

  return (
    <>
      <header>
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="fixed right-5 bottom-5 pt-2 h-10 w-10 text-3xl z-10  shadow-md shadow-black bg-purple-700 rounded-full text-white font-bold hover:bg-black hover:pt-1"
        >
          ^
        </button>
      </header>
      <main className="w-9/12 m-auto">
        <h1 className="text-center text-4xl font-bold my-4">
          Aller Media Case
        </h1>
        <div>
          {api.length > 0 ? (
            api.map(({ columns }: Array) => {
              i++;
              return (
                <div key={i} className="flex justify-between">
                  {columns.map((elm: Column) => {
                    let width: string = '';
                    switch (elm.width) {
                      case 4:
                        width = 'w-4/12';
                        break;
                      case 5:
                        width = 'w-5/12';
                        break;
                      case 6:
                        width = 'w-6/12';
                        break;
                      case 7:
                        width = 'w-7/12';
                        break;
                      default:
                        break;
                    }
                    return (
                      <Card
                        key={elm.title}
                        widthVal={elm.width}
                        width={width}
                        elm={elm}
                      />
                    );
                  })}
                </div>
              );
            })
          ) : (
            <p className="text-center my-10">Loading...</p>
          )}
          {error ? (
            <div className="text-center">
              <p>An error occured, couldn't find news</p>
              <p>En feil skjedde, finner ikke nyheter</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </main>
    </>
  );
}

export default App;
