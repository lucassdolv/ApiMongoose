const UserController = {
    create: async (req, res) => {
        try{
            const { nome, email, idade } = req.body;

            const user = await User.create({ nome, email, idade});

            return res.status(200).json({
                msg: 'Usuario criado com sucesso',
                user
            })
        }catch (error) {
            return res.status(500).json({
                msg: 'Contate o suporte'
            });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email, idade } = req.body;

            const userFinded = await User.findById(req.params);
            if (!userFinded) {
                return res.status(404).json({
                    msg: 'Usuario nao encontrado'
                })
            }
            await User.findByIdAndUpdate(id, {
                nome,
                email,
                idade
            });

            return res.status(200).json({
                msg: 'Usuario atualizado com sucesso'
            })
        }catch (error) {
            return res.status(500).json({
                msg: 'Contate o suporte'
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await user.findByIdAndDelete(id);
            return res.status(200).json({
                msg: 'Usuario deletado com sucesso!'
            });
        }catch (error) {
            return res.status(500).json({
                msg: 'Contate o suporte'
            })
        }
    },
    getAll: async (req, res) => {
        try{
            const users = await User.find();
            return res.status(200).json(users);
        }catch (error) {
            return res.status(500).json({
                msg: 'Contate o suporte'
            })
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params
            const user = await User.findById(id);

            return res.status(200).json({
                msg: "Usuario encontrado com sucesso",
                user
            });
        }catch (error) {
            return res.status(500).json({
                msg: 'Contate o suporte'
            })
        }
    }
}

module.exports = UserController;