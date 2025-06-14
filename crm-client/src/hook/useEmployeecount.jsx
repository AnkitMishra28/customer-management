import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { getApiUrl } from '../config/api';

const useemployeeCount = () => {
    const fetchUsers = async () => {
        const response = await axios.get(getApiUrl('employeeCount'));
        return response.data;
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: employee = [], isLoading:employeeLoading } = useQuery({
        queryKey: ["employee"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });

  return [employee,employeeLoading]
}

export default useemployeeCount