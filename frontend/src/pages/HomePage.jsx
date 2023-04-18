import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap';

import { fetchChats } from '../store/chatsSlice';
import { useAuth } from '../providers/AuthProvider/useAuth';
import { showErrorToast } from '../helpers/showToast';
import { ChannelsBar } from '../components/HomePageBars/ChannelsBar';
import { MessagesBar } from '../components/HomePageBars/MessagesBar';

export const HomePage = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.chats);

  const { getAuthHeader } = useAuth();

  useEffect(() => {
    const headers = getAuthHeader();
    dispatch(fetchChats(headers));
  }, [dispatch, getAuthHeader]);

  useEffect(() => {
    if (error) {
      showErrorToast(error);
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column vh-100">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white">
        <Col xs={4} md={3} lg={2} className="border-end pt-5 px-0 bg-light">
          <ChannelsBar />
        </Col>
        <MessagesBar />
      </Row>
    </Container>
  );
};
