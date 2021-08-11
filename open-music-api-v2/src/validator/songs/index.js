const InvariantError = require('../../exceptions/invariantError');
const { SongPayloadSchema } = require('./schema');


const SongsValidator = {
    validateSongPayLoad: (payload) => {
        const validResult = SongPayloadSchema.validate(payload);
        if(validResult.error){
            throw new InvariantError(validResult.error.message);
        }
    }
}

module.exports = SongsValidator;