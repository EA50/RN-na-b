
const Note = require('../models/note');

// cors requirement
exports.cors_use = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
}


//
exports.main_page =(req, res) => {

    Note.find()
        .then(r=> {
            res.json(r)
        })
        .catch(err => 
            console.log(err)
        );
}
exports.post_note = (req, res) => {

    const note = new Note({
        _id_a: req.body.id,
        dateCreated: req.body.dateCreated,
        noteContent: req.body.noteContent
    })

    note.save()
        .then(r=> {
            console.log(r);
        })
        .catch(err => 
            console.log(err)
        );

    res.json({'post': "successful"});
}
exports.edit_note = (req, res) => {
    const { id } = req.params;
    const body = req.body;

    Note.findByIdAndUpdate(id, body, { new: true })
    .then(r=> {
        res.send('success');
    })  
    .catch(err => { 
        console.error(err)
    });

}

exports.delete_note = (req, res) => {
    const { id } = req.params;

    Note.findByIdAndDelete(id)
        .then((r)=> {
            res.json({ 'from': 'server' });
        })
        .catch(err=> {
            console.log(err);
        })
}

