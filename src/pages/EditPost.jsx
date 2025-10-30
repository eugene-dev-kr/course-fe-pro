
import PageHeader from "../components/PageHeader/index.js";
import {Alert, Button, Form, Spinner} from "react-bootstrap";
import {useState, useEffect} from "react";
import {updatePost, fetchData} from "../utils/api.js";
import {useNavigate, useParams} from "react-router-dom";
import routerPaths from "../router/routerPaths.js";

const EditPost = () => {
    const { id: postId } = useParams();
    const navigate = useNavigate();
    
    const [formState, setFormState] = useState({ title: '', body: '' })
    const [isRequestSuccess, setIsRequestSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPostData = async () => {
            if (!postId) return;

            setLoading(true);
            try {
                const data = await fetchData(`/posts/${postId}`);
                
                setFormState({
                    title: data.title,
                    body: data.body,
                });
                setError(null);
            } catch (err) {
                console.error("Error loading post for edit:", err);
                setError('Не вдалося завантажити дані для редагування.');
            } finally {
                setLoading(false);
            }
        }

        loadPostData();
    }, [postId]);

    const handleChange = ({target}) => {
        setFormState(prev => ({ ...prev, [target.name]: target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(loading) return;
        
        setLoading(true)
        setIsRequestSuccess(false)

        try {
            await updatePost(postId, formState);
            
            setIsRequestSuccess(true)
            
            setTimeout(() => {
                navigate(routerPaths.viewPost + `/${postId}`)
            }, 2000)
            
        } catch (err) {
            console.error(err)
            setError('Помилка при збереженні змін.');
            setIsRequestSuccess(false)
            setLoading(false); 
        }
    }
    
    if (loading && formState.title === '') {
        return <Alert variant={'warning'} className="text-center">
            <Spinner animation="border" role="status"><span className="visually-hidden">Loading post...</span></Spinner>
        </Alert>
    }
    
    if (error) {
        return <Alert variant={'danger'} className="text-center">Помилка: {error}</Alert>
    }

    return (
        <div>
            <PageHeader title={`Редагувати Пост #${postId}`} />

            {isRequestSuccess ? <Alert variant={'success'} className="text-center">Дані успішно оновлено!</Alert> : null}

            <Form className='col-md-6 offset-md-3' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label column={false}>Title</Form.Label>
                    <Form.Control disabled={loading} type="text" placeholder="Enter title" name={'title'} value={formState.title} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBody">
                    <Form.Label column={false}>Body</Form.Label>
                    <Form.Control disabled={loading} as="textarea" placeholder="Body" rows={3} name={'body'} value={formState.body} onChange={handleChange}/>
                </Form.Group>
                
                <Button variant={loading ? 'secondary' : 'primary'} type="submit" className='d-flex align-items-center gap-2' disabled={loading}>
                    <span>Зберегти</span>

                    {loading && <Spinner animation="border" role="status" size="sm">
                        <span className="visually-hidden">Saving post...</span>
                    </Spinner>}
                </Button>
            </Form>
        </div>
    );
};

export default EditPost;