const {
  express, mongoose, bodyParser, PORT, DATABASE_URL,
} = require('./config');
const routes = require('./routes/routes');

mongoose.set('useUnifiedTopology', true);
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: '5ebe782af493bd3acc2de606',
  };
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT);
