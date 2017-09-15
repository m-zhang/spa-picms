// We import our game schema
import Picture from '../models/picture';

// Get all the games sorted by postDate
const getPictures = (req, res) => {
    // Query the db, if no errors send all the games to the client
    Picture.find(null, null, { sort: { postDate : 1 } }, (err, pictures) => {
        if (err) {
            res.send(err);
        }
        res.json(pictures); // Games sent as json
    });
}

// Get a single game filtered by ID
const getPicture = (req, res) => {
    const { id } = req.params;
    // Query the db for a single game, if no errors send it to the client
    Picture.findById(id, (err, picture) => {
        if (err) {
            res.send(err);
        }
        res.json(picture); // Game sent as json
    });
}

// Get the body data and create a new Game
const postPicture = (req, res) => {
    // We assign the game info to a empty game and send a message back if no errors
    let picture = Object.assign(new Picture(), req.body);

    // ...Then we save it into the db
    picture.save(err => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'picture created' }); // A simple JSON answer to inform the client
    });
};

// Delete a game by the given ID
const deletePicture = (req, res) => {
// We remove the game by the given id and send a message back if no errors
    Picture.remove(
        { _id: req.params.id },
        err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'successfully deleted' }); // A simple JSON answer to inform the client
        }
    );
};

// We export our functions to be used in the server routes
export { getPictures, getPicture, postPicture, deletePicture };